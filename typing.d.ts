interface Station {
    _id: string;
    name: string;
    imgUrl: string;
    tags: string[];
    songs: Song[];
    createdBy: CreatedBy;
  }
  
  interface CreatedBy {
    _id: string;
    username: string;
  }
  
  interface Song {
    id: string;
    title: string;
    channelTitle: string;
    imgUrl: string;
    addedAt: number;
    url?: string;
  }