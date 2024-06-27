import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <header className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white text-center py-4">
        <h1 className="text-lg font-bold">坪山商事调解系统</h1>
        <p className="text-sm">深圳市坪山区商事调解院合同纠纷调解中心案件查询平台</p>
      </header>
      <main className="flex flex-col items-center w-full max-w-md p-4">
        <form className="w-full space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idNumber">
              身份证号码 <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="idNumber"
              placeholder="请输入被申请人身份证号"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              手机号码 <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="phoneNumber"
              placeholder="请输入被申请人手机号"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">
              验证码 <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <input
                className="flex-grow px-3 py-2 border rounded"
                type="text"
                id="verificationCode"
                placeholder="请输入短信验证码"
              />
              <button
                className="px-4 py-2 bg-gray-200 border rounded"
                type="button"
              >
                获取验证码
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-full py-2 bg-red-500 text-white font-bold rounded"
              type="submit"
            >
              查询
            </button>
          </div>
        </form>
      </main>
      <footer className="w-full bg-red-500 text-white text-center py-4">
        <p className="text-xs">
          主办单位：深圳市坪山商事调解院合同纠纷调解中心
          <br />
          共建单位：深圳律创智联科技有限公司
          <br />
          备案号：粤ICP备2024260067号
        </p>
      </footer>
    </div>
  );
};

export default Index;