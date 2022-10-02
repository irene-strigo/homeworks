function formatDate(dateString) {

    const now = Math.round((new Date()).getTime() / 1000)
    const date = Math.round((new Date(dateString)).getTime() / 1000)

    const diff = now - date

    //console.log(diff)

    if (diff <= 1) {
        console.log('прямо сейчас')
        return
    }
    if (diff <= 60) {
        console.log(`${diff} сек. назад`)
        return
    }
    if (diff <= 3600) {
        console.log(`${Math.round(diff / 60)} мин. назад`)
        return
    }
    if (diff > 3600) {
        console.log(`${new Date().getDate()}.0${new Date().getMonth()  + 1
        }.${new Date().getFullYear().toString().slice(-2)
        } ${new Date().getHours()}:${(new Date().getMinutes()<10?'0':'') + new Date().getMinutes()
    }`)
    }
}
//formatDate('2022-09-30T11:55:59+02:00')