package site.metacoding.blogv2.web.api.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import site.metacoding.blogv2.domain.user.User;

// DTO : data Transper Object (통신으로 전달하거나 받는 오브젝트를 엔티티 아입으로 변환한다.)

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JoinDto {
    private String username;
    private String password;
    private String email;
    private String addr;

    public User toEntity() {
        User user = new User();
        user.setUsername(this.username);
        user.setPassword(this.password);
        user.setEmail(this.email);
        user.setAddr(this.addr);
        return user;
    }
}
