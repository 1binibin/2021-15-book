# 도서 관리 시스템

# 사용 기술

- HTML
- CSS3
- Javascript
- Node.js ( Express )
- MySQL
- EJS

# 배포

- AWS EC2
- Router 53

# 사용한 오픈 API 소스

- express
- jwt
- helmet
- bcrypt
- validator
- cors
- morgan
- passport
- multer
- dotenv
- method-override
- lodash
- uuid
- moment

# 서버 내용

## 1. Back Server

## 주요 구현 내용

1. 로그인 검증 처리 (Validator)

   - 회원 가입 기준 통과 검증
   - keyUp 이벤트로 DB와 통신하며 중복 검사

2. SNS 로그인 처리 (Passport)

   - Passport를 통한 Kakao, Naver 로그인 구현

3. 회원 수정 및 탈퇴

   - 회원 비밀번호 수정 구현
   - 회원 탈퇴시 비밀번호를 기준으로 탈퇴 구현
   - SNS 회원 탈퇴 구현
   - API key(인증키) 발급, 도메인 등록 ( API서버를 통한 통신을 위하여 )

4. 파일 업로드

   - 파일 업로드 구현 ( Multer )
   - 파일 수정 및 삭제 구현
   - 파일 다운로드 구현
   - 업로드 가능한 파일 제한

5. 인증 처리
   - Middleware를 통해 등록한 회원과 접속중인 회원의 일치 확인
   - 일치 한다면 등록된 게시물의 수정/삭제 권한 부여

## 2. Api Server

- cookie의 존재 여부 검사
- Back 서버에서 발급받은 Api key와 도메인의 일치 여부
- 일치 한다면 JWT를 통한 쿠키 생성
- json으로 데이터를 리턴

## [Front Server](https://binibin-vue-book.web.app/)

# Database
![book-erd](https://user-images.githubusercontent.com/87403399/147545503-1062da7d-904e-428a-920d-393c0e991664.png)

