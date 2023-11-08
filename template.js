module.exports = {
    HTML: function (name, list, body, control) {
        return `
            <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}</title>
        </head>
        <body>
            <h1><a href="/">선린오프라인고등학교</a></h1>
            <!-- 메뉴 -->
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        `
    }, list: function (files) {
        let list = '<ol>'
        for (i = 0; i < files.length; i++) {
            list = list + `<li><a href="/?name=${files[i].id}">${files[i].name}</a></li>`
        }
        list = list + '</ol>'
        return list
    }, create: function() {
        return `
        <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="이름" required></p>
            <p><textarea name="description" placeholder="과목" required></textarea></p>
            <p><input type="text" name="class_no" placeholder="학급" required></p>
            <p><input type="number" name="office_no" placeholder="교무실 번호" required></p>
            <p><button type="submit">Send</button></p>
        </form>
        `
    }, update: function(id, name, content, class_no, office_no) {
        return `
        <form action="/update_process" method="post">
            <p><input type="hidden" name="id" value="${id}"></p>
            <p>이름:<input type="text" name="title" placeholder="이름" value="${name}" required></p>
            <p>과목:<textarea name="description" placeholder="과목" required>${content}</textarea></p>
            <p>학급:<input type="text" name="class_no" placeholder="학급" value="${class_no}" required></p>
            <p>교무실 번호:<input type="number" name="office_no" placeholder="교무실 번호" value="${office_no}" required></p>
            <p><button type="submit">Send</button></p>
        </form>
        `
    }
}