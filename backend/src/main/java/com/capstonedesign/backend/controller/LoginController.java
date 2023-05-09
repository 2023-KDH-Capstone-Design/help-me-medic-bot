package com.capstonedesign.backend.controller;

import com.capstonedesign.backend.config.SessionConstConfig;
import com.capstonedesign.backend.domain.login.service.LoginService;
import com.capstonedesign.backend.domain.login.service.dto.request.LoginRequestDTO;
import com.capstonedesign.backend.domain.login.service.dto.response.DetailSessionResponseDTO;
import com.capstonedesign.backend.domain.login.service.dto.response.LoginResponseDTO;
import com.capstonedesign.backend.domain.login.service.dto.response.LogoutResponseDTO;
import com.capstonedesign.backend.domain.member.Member;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {

  private final LoginService loginService;

  @PostMapping("/login")
  public LoginResponseDTO login(@RequestBody LoginRequestDTO loginRequestDTO, HttpServletRequest request) {

    Member loginMember = loginService.login(loginRequestDTO.getLoginId(), loginRequestDTO.getPassword());
    log.info("login: {}", loginMember);

    if (loginMember == null) {
      log.error("login failed");
      return new LoginResponseDTO(-1L, "null", "null", "null", -1);
    }

    HttpSession session = request.getSession();
    session.setAttribute(SessionConstConfig.SESSION_KEY, loginMember);

    return new LoginResponseDTO(loginMember.getId(), loginMember.getLoginId(), loginMember.getPassword(), loginMember.getName(), loginMember.getAge());
  }

  @PostMapping("/logout")
  public LogoutResponseDTO logout(HttpServletRequest request) {

    HttpSession session = request.getSession(false);
    if (session != null) {
      session.invalidate();
    }

    return new LogoutResponseDTO(true, "로그아웃");
  }

  @GetMapping("/session")
  public DetailSessionResponseDTO detailSession(HttpServletRequest request) {

    HttpSession session = request.getSession(false);

    if (!Objects.isNull(session) && !Objects.isNull(session.getAttribute(SessionConstConfig.SESSION_KEY))) {
      Member loginMember = (Member) session.getAttribute(SessionConstConfig.SESSION_KEY);
      return new DetailSessionResponseDTO(loginMember.getId(), loginMember.getLoginId(), loginMember.getName(), loginMember.getAge());
    } else {
      return new DetailSessionResponseDTO(-1L, "", "", -1);
    }
  }
}