(() => {
  const paperLinks = [
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/pii/S0306457325002523",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S175115772400124X",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s10490-025-10078-6",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=0YYC1NNgyEDevUEWH3VllUA3fVp1H-2pRIqywMaPSiGhJBstOE8Pu0PJsMxoqQ4VMXnuVRw0buG2DLv90Ud46kB5O72HHOvSY86A0lwWRXbMTypZcvLTrshCwspULv9HzvpLAuiSnj1W2Jd8zhpoIESRC_fAxiZQIAa8acRpzsk=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S0306457324001262",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05031-1",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05093-1",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05156-3",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e2f2529926226b58300d8bbf9b5a6d36e960/c/whg7pz/search/details/n5e5hwa52r?db=buh",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=uL5Q33-ChRQFxUxJW_VpDnVOkiC7fxzfGT4v-t8Kt-SZrYqr47S4fZfZb4kjno7kWT__gMByJZOplE3WLfm6TQbsiDz19j69WhBdZGLtf23Bqnef66kUWdy_Y05RYnVGLx8r0Q09xULSuXvCDJKFhfxgVnJlCatG&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=YMwpULBJqz7mqgbJdq3mQryCD6wYwYv75RIlmyp3u-V9cp_VrGPJtApe8W1GIqJiLUS97enRyDXR0Xsg7uupKkp-oDmPsf1D69XmOMZPvM0Ydbk7RmPjtdC8YXyn6oBGmHMSQjqA4A8N61lXjKvBf4LsRh_2cY_l9SUPoZ6ZmeA=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/org/science/article/pii/S1438887123008877",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S0306457321003150",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S1751157721001103",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S1751157721000961",
    "https://direct.mit.edu/qss/article/3/4/1133/113635/Understanding-knowledge-role-transitions-A",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=YMwpULBJqz7dXJvU6T_MUo_SeH-WGo2kQCR3wZJHxlaZw5smX6GCw-hddrcuEbV8a4_AhpDk0yBrprrMfAYJ9R0IGKNKHymkCWRiodbeFt4WeISFo2aKQK8j5MN_gM_-m8KLpcxziGo9zJnZ-o37uwdjd0fpQrJ93AOdRqhg22c=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=-xbefZa1Cdt7LQO75iXLPpQ82E4ja99AyZdXDkTbQ6q4o_YDFoIi7emGZ5O02W93PxVB3uO7RPCd95_2xUHoB1-192LScJPHt62RXu7Cbv6nt1svx7QUEPWvYBI4BgO4CthPukkVBwN7vxcDLKl3AY3QGZdmU2O5ro-uz1aSGHE=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=-xbefZa1CdsWrWlnjKkdn-0TlddrfjRUDh9h7ZARhzB3rxKlDlNnUTeuEU8xoNcjmn1Dg4hQhhud8_vMKGqImEOuT0vyjqjoUqDGR8ECVueYpv0fSlBLtqQLZGiKFz1VpIvBhOiEUtQz2PzCWnbpCq3caCJbIbRRIL8fum-uMw8=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=NK8hpUzgeRVNwnEQRFoWWuqF5ZJLdNArBwidh9o8qXxg-nB6T8BMoyqGOwPAPgme84T_5JonKV6M0f36q_PfkAL2SmPSCcVPXrxhJ6sBwF-B-5Y1jihWfpZ6IxMwapKUWqHh_DYooF6CV-SodiJssYHntZC3AOmJVYZeXKgDmv0=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=NK8hpUzgeRVTSU36YOeOpB-rabGxUbFmq3AsbUK5_BnS6Iw7oXd0NGJqj1uEvIQu_XN5vK5IWQgOFgSWroCeUeQf-zS-Sman1sSaVPG2e-lupcmxGXyCUXN5PhP7ruNPkexhLDO0PXh9oCxSXZflU7Q1f6CwyFBli3EzBM3357U=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=r_P-ES8duRp0S_1LSanSppBSi1jhz4GUkuflfsCYrUEqgaqypgyDXIsxzPZeCvkbQKohHhbq-EiA0Is1w7Xx7eRKfQWl9XVLHOKdWqNyOifpItRHJzRN5LWZlS6gLYwaQqDfKbn29X8qLe-76o1ZJV-EYTfL55noEz-W6Cwm1DM=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=W694F5cljyDywHjfI3o7_gvs-hx2Zuxj0zOHAq_6RaEEMSrddDxMu4Joek_8p1vwW2oRfPMuKFO-xf8-uojh-HFcNZDbdlmrgzvGyzMWuhXk2K_4jhJrLAuq5EyP7xhkzEBl2DioGzJrz_LTWghZlvFswZBLUOHMaWSLC-W04os=&uniplatform=NZKPT",
    "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=ifIT5_n5_Gf-SCkMES49QUCWMjcfOhzA6kxG1omDjOvE6-Vlezh2iKCRCyQXvKvcos4uUpRjw_cg1V2DShUkoac6NoHlGwnanq6HSFajCgZTLGXgyZZlqxCJ1S9QbNW7RyrKJ0cYkicxMxqgPp3IBkyJQhkJb8upuex8qTpWMFY=&uniplatform=NZKPT",
  ];

  const titles = document.querySelectorAll(".paper-card .paper-title");

  titles.forEach((title, index) => {
    const link = paperLinks[index];
    if (!link) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.className = "paper-title-link";
    anchor.innerHTML = title.innerHTML;

    title.innerHTML = "";
    title.appendChild(anchor);
  });
})();
