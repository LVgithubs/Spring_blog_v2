// 1. 이벤트 리스너

$("#username").keyup((event) => {
        //console.log(event.target.value);
        usernameSameCheck(event.target.value);
 });
$("#btn-join").click(()=>{
    join();
});


$("#btn-login").click(()=>{
    login();
});

// 회원가입 요청 메소드
 function join(){
     // (1) 오브젝트로 만들어야한다. - > username, password, email, addr를 찾아서 java script 오브젝트로 만든다.
        let userDto = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val(),
            addr: $("#addr").val()
        }
        
     // (2) JSON으로 변환한다. (JSON이 통신의 표준이니까.)
        let userJson = JSON.stringify(userDto);


     // (3) fetch 요청
        let response = await fetch("/api/join", {
            method: "POST",
            body: JSON.stringify(userDto),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        });
     // (4) 회원가입이 잘 되면 알림창을 띄우고, 로그인 페이지로 이동한다.

        let responseParse = await response.json();
                if (responseParse.code == 1) {
            alert("가입성공");
            location.href = "/loginForm";
        } else {
            alert("가입실패");
        }

 }



    async function usernameSameCheck(username) {
        let response = await fetch(`/api/user/username/same-check?username=${username}`);
        let responseJson = await response.json();
        //console.log(responseJson);
        if (responseJson.data == "있어") {
            alert("해당 아이디를 사용할 수 없습니다.");
            let prevUsername = $("#username").val().slice(0, -1);
            $("#username").val(prevUsername);
        }
    }
    $("#username").keyup((event) => {
        //console.log(event.target.value);
        usernameSameCheck(event.target.value);
    });


    

// 로그인 요청 메소드
 function login(){
     // (1) 오브젝트로 만들어야한다. - > username, password 를 찾아서 java script 오브젝트로 만든다.
        let userDto = {
            username: $("#username").val(),
            password: $("#password").val(),
        }
        
     // (2) JSON으로 변환한다. (JSON이 통신의 표준이니까.)


     // (3) fetch 요청
        let response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(userDto),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        });
     // (4) 회원가입이 잘 되면 알림창을 띄우고, 로그인 페이지로 이동한다.

        let responseParse = await response.json();
                if (responseParse.code == 1) {
            alert("로그인 성공");
            location.href = "/loginForm";
        } else {
            alert("로그인 실패");
        }

 }
