# eadditor

personal web editor

FrontEND
- login page(localstorage to save token)
- content page( using quill library )

BackEND
- need to save user id and password
- need to save the data

Dones:
- fulfilled all the basic requirements
[x]1. 처음 페이지에 진입했을 때, 유저의 email 및 password 를 입력받습니다.
[x]유저가 입력한 email이 이미 회원가입 되었다면, 함께 전달받은 password로 로그인합니다.
[x]유저가 입력한 email이 회원가입되지 않았다면, 함께 전달받은 password로 회원가입합니다.

[x]2. 각 유저당 하나의 노트만 다룰 수 있습니다.
[x]서버에 저장된 내용이 있다면, 저장된 내용을 조회합니다.
[x]노트의 내용을 작성하면, 수정한 내용이 서버로 전송되어 저장됩니다.

[x]3. 노트에서는 다음 스타일을 적용할 수 있습니다 bold italic underline code.

[x]4. 페이지를 새로고침(refresh)하더라도 로그인 정보는 유지되어야 하며, 로그아웃 버튼을 누르면 로그인 정보가 해제됩니다.

- used context API to globally manage authentication but found out easier with localStorage
- used localStorage mostly to get the user information

To be done or should have done:
- thorough architecture beforehand by checking all the requirements
- implement token and session with backend
- better csss
