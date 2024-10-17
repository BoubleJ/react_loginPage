import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Btn(props) {
  return (
    <button
      className="snsBtn"
      style={{ backgroundColor: props.bg_color, color: props.color }}
    >
      <i class="fa-duotone fa-comment"></i> <FontAwesomeIcon icon={faComment} />
      {props.title}로 로그인 로그이너라인러미ㅏ
    </button>
  );
}

function App() {
  let [LoginSNS, setLoginSNS] = useState([" 카카오톡으", " Google", " 네이버"]);

  return (
    <div className="background">
      <section>
        <form>
          <input type="hidden"></input>
          <div class="title_logo">
            <strong class="logo">
              <a href="#">여기어때</a>
            </strong>
          </div>

          <div className="snsBtn_box">
            <Btn></Btn>
            <Btn
              title={LoginSNS[1]}
              bg_color="rgb(24,119,242)"
              color="white"
            ></Btn>
            <Btn
              title={LoginSNS[2]}
              bg_color="rgb(40,209,17)"
              color="white"
            ></Btn>
          </div>

          <div className="or_box">
            <p class="space_or">
              <span>또는 또는 머ㅣㅏㄹㅇ너ㅏㅣㄻㄹㅇㄴㅁ</span>
            </p>
          </div>

          <div class="login_input">
            <input
              type="email"
              name="id"
              placeholder="이메일 주소"
              data-msg-required="이메일 주소를 입력해 주세요."
            />
          </div>
          <div class="login_input">
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              required
              class="required"
              data-msg-required="비밀번호를 입력해 주세요."
            />
          </div>
          <div className="snsBtn_box login_btn">
            <button class="snsBtn" type="submit">
              로그인 ㄹ그일ㅇ너ㅣㅏㄹㅇ너ㅣㅏㄹㅇㄴ머ㅣㅏㄹㅇㄴ머ㅣㅏㄹㅇㄴㅁ
            </button>
          </div>

          <div className="footer_box">
            <div className="join_box">
              <div className="textbox">
                <a href="https://www.goodchoice.kr/user/join">
                  <span>비밀번호 재설정</span>
                </a>
              </div>
            </div>

            <div className="join_box">
              <div className="textbox">
                <a href="https://www.goodchoice.kr/user/join">
                  <span>회원가입</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
