import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    useremail: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    // 폼 제출 시 처리 로직 추가
    // 이메일 및 비밀번호 유효성 검사
    if (!formData.useremail) {
      // 이메일이 입력되지 않은 경우 span 태그 보이기
      document.getElementById("useremail-error").style.display = "block";
      alert("이메일를 입력하세요.");
      return;
    } else {
      // 이메일 형식 검사
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.useremail)) {
        document.getElementById("useremail-error").style.display = "block";
        alert("유효한 이메일을 입력하세요.");
        return;
      }
      document.getElementById("useremail-error").style.display = "none";
    }
    if (!formData.password) {
      document.getElementById("password-error").style.display = "block";
      alert("비밀번호를 입력하세요.");
      return;
    } else {
      document.getElementById("password-error").style.display = "none";
    }
    if (formData.password !== formData.confirmPassword) {
      document.getElementById("confirm-password-error").style.display = "block";
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      document.getElementById("confirm-password-error").style.display = "none";
    }
    // 모든 유효성 검사를 통과한 경우
    console.log("폼 데이터:", formData);
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <>
      {/* 실시간 유효성 검사를 하는 회원가입 컴포넌트 */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            회원가입 폼
          </h2>

          <form className="space-y-5">
            {/* 이메일 */}
            <div>
              <label
                htmlFor="useremail"
                className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <input
                type="email"
                id="useremail"
                name="useremail"
                value={formData.useremail}
                onChange={e =>
                  setFormData({ ...formData, useremail: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="이메일를 입력하세요"
              />
              <span
                className="mt-1 block text-sm text-red-500"
                id="useremail-error"
                style={{ display: "none" }}>
                이메일은 필수입니다.
              </span>
            </div>

            {/* 비밀번호 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 입력하세요"
              />
              <span
                className="mt-1 block text-sm text-red-500 "
                id="password-error"
                style={{ display: "none" }}>
                비밀번호는 필수입니다.
              </span>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={e =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 다시 입력하세요"
              />
              <span
                className="mt-1 block text-sm text-red-500"
                id="confirm-password-error"
                style={{ display: "none" }}>
                비밀번호가 일치하지 않습니다.
              </span>
            </div>

            {/* 레벨 라디오버튼*/}
            <div className="mb-2">레벨</div>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="level"
                  value="1"
                  className="form-radio text-blue-600"
                  defaultChecked
                />
                <span className="ml-2">신입</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="level"
                  value="2"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">주니어</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="level"
                  value="3"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">시니어</span>
              </label>
            </div>

            {/* 버튼 */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              onClick={handleSubmit}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
