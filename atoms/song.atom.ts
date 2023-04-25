import { atom } from "recoil";

export const currSongState = atom({
    key: 'currSongState',
    default: {
        "id": "TmKh7lAwnBI",
        "title": "BAD BUNNY x JHAY CORTEZ  DÁKITI ",
        "channelTitle": "Bad Bunny",
        "imgUrl": "//i.ytimg.com/vi/TmKh7lAwnBI/hqdefault.jpg",
        "url": "//www.youtube.com/embed?v=TmKh7lAwnBI"
        ,
    }
})

export const currStationState = atom({
    key: 'currStationState',
    default: {}
})

// export const currStationsState = atom({
//     key: 'currStationsState',
//     default: []
// })

export const playerState = atom({
    key: 'playerState',
    default: null
})

export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false
})