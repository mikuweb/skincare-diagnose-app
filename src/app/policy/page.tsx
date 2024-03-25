import React from "react";

const Policy = () => {
  return (
    <div className="py-12 px-4 md:p-16 md:bg-leaf-100">
      <p className="text-brown-100 text-3xl font-bold font-english my-8 md:text-center">
        Privacy policy
      </p>

      <ol className="flex flex-col gap-7 p-6 md:bg-white md:rounded-3xl md:p-10">
        <li>
          <p className="text-xl font-semibold mb-2">はじめに:</p>
          <p>
            当サービスにおける個人情報の利用目的は、次に掲げる事項です。ユーザーのプライバシー保護と個人情報の適切な取り扱いについて、最善を尽くしてまいります。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">
            AIによるコンテンツ生成について:
          </p>
          <p>
            当サービスは、AI（人工知能）によって生成されるコンテンツを提供します。ユーザーが入力した質問への回答に基づいて、AIが肌タイプや適したスキンケア成分などを診断し、それに基づいて回答を生成します。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">
            個人で運用するサービスについて:
          </p>
          <p>
            当サービスは個人で運用されており、品質保証を提供するものではありません。AIによって生成されるコンテンツの正確性や完全性についての保証はいたしかねます。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">収集する情報について:</p>
          <p>
            当サービスでは、ユーザーが入力した質問やその他の情報を収集する場合があります。これらの情報は、肌タイプやスキンケアに関する診断を行うために使用され、その他の目的には使用されません。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">情報の利用と共有:</p>
          <p>
            当サービスでは、ユーザーから収集した情報を、肌タイプや適したスキンケア成分などを診断する目的以外には使用しません。また、ユーザーの許可なしに、収集した情報を第三者と共有することはありません。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">セキュリティ:</p>
          <p>
            ユーザーのプライバシーと個人情報の保護は、当サービスの最優先事項です。適切なセキュリティ対策を実施し、ユーザーの情報を適切に保護します。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">法的責任:</p>
          <p>
            当サービスは、提供されるコンテンツの正確性や信頼性に関して一切の責任を負いません。ユーザーが当サービスを利用する際は、自己の判断と責任において行動してください。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">更新と通知:</p>
          <p>
            当プライバシーポリシーは定期的に見直される可能性があります。重要な変更がある場合は、ユーザーに通知されることがあります。
          </p>
        </li>
        <li>
          <p className="text-xl font-semibold mb-2">お問い合わせ:</p>
          <p>
            プライバシーポリシーに関するご質問や疑義がございましたら、下記の連絡先までお問い合わせください。
          </p>
          <p>mikukawata.224@gmail.com</p>
        </li>
      </ol>
    </div>
  );
};

export default Policy;
