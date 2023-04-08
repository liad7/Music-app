import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { homeStations } from '../station'
const STORAGE_KEY = 'stationDB'

_createStations()

export const stationService = {
    query,
    getById,
    save,
    remove,
    searchSongs,
    getEmptyStation,
}

async function query(filterBy = ''): Promise<Station[]> {
    console.log('filterBy:', filterBy)
    let stations = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        const regex = new RegExp(filterBy, 'i')
        stations = stations.filter((station: Station): Boolean => regex.test(station.name))
    }
    return stations
}

async function searchSongs(filterBy = ''): Promise<[]> {
    let stations = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        const regex = new RegExp(filterBy, 'i')
        stations = stations.reduce((acc: Song[], station: Station): Song[] => {
            const songs = station.songs.filter(song => regex.test(song.title) || regex.test(song.channelTitle))
            return acc.concat(songs)
        },[])
    }
    return stations
}

function getById(stationId: string): Promise<Station> {
    return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId: string) {
    await storageService.remove(STORAGE_KEY, stationId)
}

async function save(station: Station): Promise<Station> {
    let savedStation: Station
    if (station._id) {
        savedStation = await storageService.put(STORAGE_KEY, station)
    } else {
        savedStation = await storageService.post(STORAGE_KEY, station)
    }
    return savedStation
}

function getEmptyStation(): Station {
    return {
        "_id": utilService.makeId(25),
        "name": "",
        "imgUrl": "",
        "tags": [] as string[],
        "songs": [] as Song[],
    } as Station
}



function _createStations() {
    let stations = storageService.loadFromStorage(STORAGE_KEY)
    if (!stations) {
        storageService.saveToStorage(STORAGE_KEY, homeStations)
    }
}

