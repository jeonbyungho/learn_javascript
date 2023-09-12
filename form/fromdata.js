const data = new FormData()
// data.append('title', '구인글 작성')
// data.append('job', ['풀스택', '데이터', '백엔드'])
// data.get('job')

// console.log(data.get('job'))

// data.action="wire"
// data.method="POST"
// console.log(data.action)
// console.log(data.method)


// console.log(data)

data.append('userid', 'admin')
data.append('password', 'ad1234')

const xhr = new XMLHttpRequest();
xhr.open('POST', '/jspweb/member/login');
xhr.send(data);