require(['./tab','./loadsong','./hotsonglist','./searchsong','./av-init'],function(tab,loadSongs,hotSongList,search,AVInit){
	AVInit()
	tab('.tabs')
    loadSongs()
    hotSongList()
    search()
	// loadSongs()
	// hotSongList()
	// search()
})