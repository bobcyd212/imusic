        var SongObject = AV.Object.extend('Song');//选择表名
		var songObject= new SongObject();
		songObject.set('words','Craig David')
		songObject.set('singer','Insomnia')
		songObject.set('cover','//i.loli.net/2017/09/01/59a92c5a6fc65.png')
		songObject.set('url','http://ovc2h4a8q.bkt.clouddn.com/Craig%20David%20-%20Insomnia.mp3')

		var songObject2 = new SongObject()
		songObject2.set('words',' Beautiful')
		songObject2.set('singer','Akon')
		songObject2.set('cover','//i.loli.net/2017/09/01/59a935c5a94d2.png')
		songObject2.set('url','http://ovc2h4a8q.bkt.clouddn.com/Akon%20-%20Beautiful%20%28Feat.%20Colby%20O%27Donis%20and%20Kardinal%20Offishall%29%20%28Radio%20Edit%29.mp3')

        var songObject3 = new SongObject()
		songObject3.set('words','California dreaming')
		songObject3.set('singer','The Papas,The Mamas')
		songObject3.set('cover','//i.loli.net/2017/09/01/59a9492e4a22d.jpeg')
		songObject3.set('url','http://ovc2h4a8q.bkt.clouddn.com/The%20Papas,The%20Mamas%20-%20California%20Dreaming%20%28重庆森林%29.mp3')

		var songObject4 = new SongObject()
		songObject4.set('words','さよならの夏~コクリコ坂から~ (Live)')
		songObject4.set('singer','手嶌葵')
		songObject4.set('cover','//i.loli.net/2017/09/01/59a9492e4a22d.jpeg')
		songObject4.set('url','http://ovc2h4a8q.bkt.clouddn.com/手嶌葵%20-%20さよならの夏~コクリコ坂から~%20%28Live%29.mp3')

		var songObject5 = new SongObject()
		songObject5.set('words','Speak Softly Love')
		songObject5.set('singer','Keren Ann')
		songObject5.set('cover','//i.loli.net/2017/09/01/59a9492e4a22d.jpeg')
		songObject5.set('url','http://ovc2h4a8q.bkt.clouddn.com/Keren%20Ann%20-%20Speak%20Softly%20Love.mp3')

		var songObject6 = new SongObject()
		songObject6.set('words',' 三线の花')
		songObject6.set('singer','Begin')
		songObject6.set('cover','//i.loli.net/2017/09/01/59a94b23a29c5.png')
		songObject6.set('url','http://ovc2h4a8q.bkt.clouddn.com/Begin%20-%20三线の花.mp3')

		var songObject7 = new SongObject()
		songObject7.set('words',' Black Is The Colour')
		songObject7.set('singer','Brian Mcfadden')
		songObject7.set('cover','//i.loli.net/2017/09/01/59a94c667d786.jpeg')
		songObject7.set('url','http://ovc2h4a8q.bkt.clouddn.com/Brian%20Mcfadden%20-%20Black%20Is%20The%20Colour%20%28Feat.%20Sinead%20O%27Connor%29.mp3')

		var songObject8 = new SongObject()
		songObject8.set('words',' This Is the Life')
		songObject8.set('singer','Angie Miller')
		songObject8.set('cover','//i.loli.net/2017/09/01/59a95f96bcdc4.jpeg')
		songObject8.set('url','http://ovc2h4a8q.bkt.clouddn.com/Angie%20Miller%20-%20This%20Is%20the%20Life.mp3')

		var songObject9 = new SongObject()
		songObject9.set('words',' Happy')
		songObject9.set('singer','Pharrell Williams')
		songObject9.set('cover','//i.loli.net/2017/09/01/59a963b014546.jpeg')
		songObject9.set('url','http://ovc2h4a8q.bkt.clouddn.com/Pharrell%20Williams%20-%20Happy.mp3')

		var songObject10 = new SongObject()
		songObject10.set('words',' 鸿雁')
		songObject10.set('singer','呼斯楞')
		songObject10.set('cover','//i.loli.net/2017/09/01/59a965ec7992d.jpeg')
		songObject10.set('url','http://ovc2h4a8q.bkt.clouddn.com/呼斯楞%20-%20鸿雁.mp3')

        var songObject11 = new SongObject()
		songObject11.set('words',' 寂寞在唱歌')
		songObject11.set('singer','孙伯纶')
		songObject11.set('cover','//i.loli.net/2017/09/01/59a967302b868.jpeg')
		songObject11.set('url','http://ovc2h4a8q.bkt.clouddn.com/孙伯纶%20-%20寂寞在唱歌.mp3')

        var songObject12 = new SongObject()
		songObject12.set('words',' 相见恨晚')
		songObject12.set('singer','彭佳慧')
		songObject12.set('cover','//i.loli.net/2017/09/01/59a9684cd8d40.jpeg')
		songObject12.set('url','http://ovc2h4a8q.bkt.clouddn.com/彭佳慧%20-%20相见恨晚.mp3')

        var songList = [songObject,songObject2,songObject3,songObject4,songObject5,songObject6,songObject7,songObject8,songObject9,songObject10,songObject11,songObject12]
		AV.Object.saveAll(songList).then(function (object) {
        alert('保存成功')
		}, function (error) {
		    // 异常处理
		 });