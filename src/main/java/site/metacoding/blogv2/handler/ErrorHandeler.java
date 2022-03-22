package site.metacoding.blogv2.handler;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import site.metacoding.blogv2.web.api.dto.ResponseDto;

@RestController
public class ErrorHandeler {

    // 모든 오류를 낚아채는 핸들러
    @ExceptionHandler(value = Exception.class)
    public ResponseDto<String> error1(RuntimeException e) {
        return new ResponseDto<String>(-1, "실패", e.getMessage());
    }

}
