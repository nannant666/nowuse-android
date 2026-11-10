// Nowuse AI：把站内新窗口链接收敛为当前窗口跳转，否则壳里点击无反应。
(function () {
    try {
        window.open = function (url) {
            if (typeof url === 'string' && url.length > 0) {
                window.location.href = url
            }
            return null
        }
    } catch (e) {}

    document.addEventListener(
        'click',
        function (e) {
            try {
                var node = e.target
                var link = node && node.closest ? node.closest('a') : null
                if (link && link.href && link.target === '_blank') {
                    e.preventDefault()
                    window.location.href = link.href
                }
            } catch (err) {}
        },
        true
    )
})()
