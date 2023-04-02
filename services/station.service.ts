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
    getEmptyStation,
}

async function query(filterBy = {}): Promise<Station[]> {
    console.log('filterBy:', filterBy)
    let stations = await storageService.query(STORAGE_KEY)
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

