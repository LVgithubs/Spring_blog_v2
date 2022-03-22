package site.metacoding.blogv2.web.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import site.metacoding.blogv2.service.UserService;
import site.metacoding.blogv2.web.api.dto.ResponseDto;
import site.metacoding.blogv2.web.api.dto.user.JoinDto;
import site.metacoding.blogv2.web.api.dto.user.LoginDto;

@RequiredArgsConstructor
@RestController
public class UserApiController {
    private final UserService userService;

    // spring 기본 전략이 x-www-f 이기 때문에,
    // json 이 아니기 때문에 join(JoinDto joinDto) 로는 데이터를 받을 수 없다.

    @PostMapping("/api/join")
    public ResponseDto<String> join(@RequestBody JoinDto joinDto) {

        userService.회원가입(joinDto);

        return new ResponseDto<String>(1, "회원가입성공", null);
    }

    @PostMapping("/api/login")
    public ResponseDto<String> login(@RequestBody LoginDto loginDto) {

        userService.로그인(loginDto);

        return new ResponseDto<String>(1, "로그인 성공", null);
    }

}
