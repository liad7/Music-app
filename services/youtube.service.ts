import axios from "axios"
import { utilService } from "./util.service"

const API_KEYS = ['AIzaSyB78sQnIs2jGHmBAwiuGLKbt9d9kpLGkU4', 'AIzaSyCDJLop9yTs7P_y00v0gdCIHRAF02-sXA8', 'AIzaSyAA8SqRrqEvtgxbgxX2qK2ENn1XO-ey8TQ']


export const YoutubeService = {
    getYoutubeReasults,
    getSongDuration,
    getAPIKey
}

async function getYoutubeReasults(val) {
    const results:any[] = []
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=20&type=video&key=${getAPIKey()}&q=${val}`)
        const { items: ytVideos } = res.data
        ytVideos.map(ytVideo => {
            if (ytVideo.snippet.title.includes('Trailer')) return
            const song = {
                id: ytVideo.id.videoId,
                title: _cleanTitle(ytVideo.snippet.title),
                channelTitle: ytVideo.snippet.channelTitle,
                imgUrl: ytVideo.snippet.thumbnails.high.url,
                addedBy: {
                    "_id": "u101",
                    "fullname": "Puki Ben David",
                    "imgUrl": "https://robohash.org/set=set3"
                },
                addedAt: Date.now()
            }
            if (!song.title) return
            results.push(song)
        })
        return results
    } catch (err) {
        return err
    }
}

function getAPIKey() {
    const apis = utilService.shuffle(API_KEYS)
    return apis[0]
}

async function getSongDuration(songId: string): Promise<string> {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${songId}&part=contentDetails&key=${getAPIKey()}`)
    const videoDuration = res.data.items[0].contentDetails.duration
    const min = videoDuration.slice(2, videoDuration.indexOf('M'))
    let sec = videoDuration.slice(videoDuration.indexOf('M') + 1, videoDuration.indexOf('S'))
    sec = sec.padStart(2, '0')
    const duration = `${min}:${sec}`
    return duration
}

function _cleanTitle(title: string): string {
    let cleanTitle = title
    if (title.includes('(')) {
        const idx = title.indexOf('(')
        cleanTitle = cleanTitle.slice(0, idx)
    }
    if (title.includes('[')) {
        const idx = title.indexOf('[')
        cleanTitle = cleanTitle.slice(0, idx)
    }
    if (title.includes('-')) {
        const idx = title.indexOf('-')
        cleanTitle = cleanTitle.slice(idx + 1)
    }
    return cleanTitle
}