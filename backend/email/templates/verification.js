// expects an object and an URL
const generateVerificationEmail = (recipient, url) => {
  return `<html data-editor-version="2" class="sg-campaigns">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
  />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

  <style type="text/css">
    body,
    p,
    div {
      font-family: inherit;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #1188e6;
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width: 480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <link
    href="https://fonts.googleapis.com/css?family=Muli&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      font-family: "Muli", sans-serif;
    }
  </style>
</head>
<body>
  <center
    class="wrapper"
    data-link-color="#1188E6"
    data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;"
  >
    <div class="webkit">
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        class="wrapper"
        bgcolor="#FFFFFF"
      >
        <tr>
          <td valign="top" bgcolor="#FFFFFF" width="100%">
            <table
              width="100%"
              role="content-container"
              class="outer"
              align="center"
              cellpadding="0"
              cellspacing="0"
              border="0"
            >
              <tr>
                <td width="100%">
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                  >
                    <tr>
                      <td>
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width: 100%; max-width: 600px"
                          align="center"
                        >
                          <tr>
                            <td
                              role="modules-container"
                              style="
                                padding: 0px 0px 0px 0px;
                                color: #000000;
                                text-align: left;
                              "
                              bgcolor="#FFFFFF"
                              width="100%"
                              align="left"
                            >
                              <table
                                class="module preheader preheader-hide"
                                role="module"
                                data-type="preheader"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  display: none !important;
                                  mso-hide: all;
                                  visibility: hidden;
                                  opacity: 0;
                                  color: transparent;
                                  height: 0;
                                  width: 0;
                                "
                              >
                                <tr>
                                  <td role="module-content">
                                    <p></p>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                                width="100%"
                                role="module"
                                data-type="columns"
                                style="padding: 30px 20px 30px 20px"
                                bgcolor="#f6f6f6"
                                data-distribution="1"
                              >
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top">
                                      <table
                                        width="540"
                                        style="
                                          width: 540px;
                                          border-spacing: 0;
                                          border-collapse: collapse;
                                          margin: 0px 10px 0px 10px;
                                        "
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="left"
                                        border="0"
                                        bgcolor=""
                                        class="column column-0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="
                                                padding: 0px;
                                                margin: 0px;
                                                border-spacing: 0;
                                              "
                                            >
                                              <table
                                                class="wrapper"
                                                role="module"
                                                data-type="image"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="72aac1ba-9036-4a77-b9d5-9a60d9b05cba"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        font-size: 6px;
                                                        line-height: 10px;
                                                        padding: 0px 0px 0px
                                                          0px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        class="max-width"
                                                        border="0"
                                                        style="
                                                          display: block;
                                                          color: #000000;
                                                          text-decoration: none;
                                                          font-family: Helvetica,
                                                            arial, sans-serif;
                                                          font-size: 16px;
                                                        "
                                                        width="59"
                                                        alt=""
                                                        data-proportionally-constrained="true"
                                                        data-responsive="false"
                                                        src="https://i.ibb.co/mNZtWjQ/Kyo.png"
                                                        height="47"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="spacer"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="331cde94-eb45-45dc-8852-b7dbeb9101d7"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 0px 0px 20px
                                                          0px;
                                                      "
                                                      role="module-content"
                                                      bgcolor=""
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="wrapper"
                                                role="module"
                                                data-type="image"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="d8508015-a2cb-488c-9877-d46adf313282"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        font-size: 6px;
                                                        line-height: 10px;
                                                        padding: 0px 0px 0px
                                                          0px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        class="max-width"
                                                        border="0"
                                                        style="
                                                          display: block;
                                                          color: #000000;
                                                          text-decoration: none;
                                                          font-family: Helvetica,
                                                            arial, sans-serif;
                                                          font-size: 16px;
                                                        "
                                                        width="95"
                                                        alt=""
                                                        data-proportionally-constrained="true"
                                                        data-responsive="false"
                                                        src="http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/61156dfa-7b7f-4020-85f8-a586addf4288/95x33.png"
                                                        height="33"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="spacer"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="27716fe9-ee64-4a64-94f9-a4f28bc172a0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 0px 0px 30px
                                                          0px;
                                                      "
                                                      role="module-content"
                                                      bgcolor=""
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="text"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="948e3f3f-5214-4721-a90e-625a47b1c957"
                                                data-mc-module-version="2019-10-22"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 50px 30px
                                                          18px 30px;
                                                        line-height: 36px;
                                                        text-align: inherit;
                                                        background-color: #ffffff;
                                                      "
                                                      height="100%"
                                                      valign="top"
                                                      bgcolor="#ffffff"
                                                      role="module-content"
                                                    >
                                                      <div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              font-size: 43px;
                                                            "
                                                            >Thanks for
                                                            signing up,
                                                          </span>
                                                          <p
                                                            style="
                                                              display: inline-block;
                                                              font-size: 43px;
                                                              margin-top: 5px;
                                                              transition: color
                                                                  0.2s ease,
                                                                transform 0.2s
                                                                  ease;
                                                            "
                                                            onmouseover="this.style.color='#2200ffbb'; this.style.transform='scale(1.02)';this.style.fontWeight='bold'"
                                                            onmouseout="this.style.color=''; this.style.transform='';
                                                                                                                          this.style.fontWeight=''"
                                                          >
                                                            ${recipient.username}
                                                          </p>
                                                        </div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="text"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e"
                                                data-mc-module-version="2019-10-22"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 18px 30px
                                                          18px 30px;
                                                        line-height: 22px;
                                                        text-align: inherit;
                                                        background-color: #ffffff;
                                                      "
                                                      height="100%"
                                                      valign="top"
                                                      bgcolor="#ffffff"
                                                      role="module-content"
                                                    >
                                                      <div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              font-size: 18px;
                                                            "
                                                            >Click on the
                                                            button below to
                                                            verify your
                                                            email!</span
                                                          >
                                                          <br />
                                                          <br />
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #2200ffbb;
                                                              font-size: 18px;
                                                            "
                                                            ><strong
                                                              >Thank
                                                              you!</strong
                                                            ></span
                                                          >
                                                        </div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="spacer"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 0px 0px 20px
                                                          0px;
                                                      "
                                                      role="module-content"
                                                      bgcolor="#ffffff"
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="module"
                                                data-role="module-button"
                                                data-type="button"
                                                role="module"
                                                style="table-layout: fixed"
                                                width="100%"
                                                data-muid="d050540f-4672-4f31-80d9-b395dc08abe1"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      bgcolor="#ffffff"
                                                      class="outer-td"
                                                      style="
                                                        padding: 0px 0px 0px
                                                          0px;
                                                        background-color: #ffffff;
                                                      "
                                                    >
                                                      <table
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        class="wrapper-mobile"
                                                        style="
                                                          text-align: center;
                                                        "
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              align="center"
                                                              bgcolor="#000dffe0"
                                                              class="inner-td"
                                                              style="
                                                                border-radius: 6px;
                                                                font-size: 16px;
                                                                text-align: center;
                                                                background-color: inherit;
                                                              "
                                                            >
                                                              <a
                                                                href=${url}
                                                                style="
                                                                  background-color: #2200ffbb;
                                                                  border: 1px
                                                                    solid
                                                                    #2200ffbb;
                                                                  border-color: #2200ffbb;
                                                                  border-radius: 0px;
                                                                  border-width: 1px;
                                                                  color: #000000;
                                                                  display: inline-block;
                                                                  font-size: 14px;
                                                                  font-weight: normal;
                                                                  letter-spacing: 0px;
                                                                  line-height: normal;
                                                                  padding: 12px
                                                                    40px 12px
                                                                    40px;
                                                                  text-align: center;
                                                                  text-decoration: none;
                                                                  border-style: solid;
                                                                  font-family: inherit;
                                                                "
                                                                target=""
                                                                >Verify Email
                                                                Now</a
                                                              >
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="spacer"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d.1"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 0px 0px 50px
                                                          0px;
                                                      "
                                                      role="module-content"
                                                      bgcolor="#ffffff"
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="text"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="a265ebb9-ab9c-43e8-9009-54d6151b1600"
                                                data-mc-module-version="2019-10-22"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 50px 30px
                                                          50px 30px;
                                                        line-height: 22px;
                                                        text-align: inherit;
                                                        background-color: #6e6e6e;
                                                      "
                                                      height="100%"
                                                      valign="top"
                                                      bgcolor="#6e6e6e"
                                                      role="module-content"
                                                    >
                                                      <div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            ><strong
                                                              >By verifying
                                                              your account
                                                              you'll be able
                                                              to :
                                                            </strong></span
                                                          >
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <br />
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            >1. Modify your
                                                            profile to your
                                                            liking!</span
                                                          >
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <br />
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            >2. Submit and
                                                            edit posts on the
                                                            website.</span
                                                          >
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <br />
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            >3. Get access to
                                                            my software's
                                                            beta.</span
                                                          >
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <br />
                                                          <span
                                                            style="
                                                              color: #2200ffbb;
                                                              color: hsla(
                                                                239,
                                                                100%,
                                                                45%,
                                                                0.555
                                                              );
                                                              font-size: 18px;
                                                              border-style: solid;
                                                              border-width: 2px;
                                                              border-radius: 6px;
                                                              padding-left: 4px;
                                                              padding-right: 4px;
                                                              padding-bottom: 1px;
                                                              transition: 0.2s;
                                                              user-select: none;
                                                            "
                                                            onmouseover="this.style.color='hsla(239, 100%, 45%, 0.555)'; this.style.backgroundColor='#2200ff71'
                                                                                                                          this.style.cursor='pointer';"
                                                            onmouseout="this.style.color='#2200ffbb'; this.style.backgroundColor=''; this.style.filter='';"
                                                            ><strong
                                                              >+ much
                                                              more!</strong
                                                            ></span
                                                          >
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <br />
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            >Need support?
                                                            Reach out to me
                                                          </span>
                                                        </div>
                                                        <div
                                                          style="
                                                            font-family: inherit;
                                                            text-align: center;
                                                            padding-top: 5px;
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              color: #ffffff;
                                                              font-size: 18px;
                                                            "
                                                            >without
                                                            hesitating!</span
                                                          >
                                                        </div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="module"
                                                data-role="module-button"
                                                data-type="button"
                                                role="module"
                                                style="table-layout: fixed"
                                                width="100%"
                                                data-muid="d050540f-4672-4f31-80d9-b395dc08abe1.1"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      bgcolor="#6e6e6e"
                                                      class="outer-td"
                                                      style="
                                                        padding: 0px 0px 0px
                                                          0px;
                                                        background-color: #6e6e6e;
                                                      "
                                                    >
                                                      <table
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        class="wrapper-mobile"
                                                        style="
                                                          text-align: center;
                                                        "
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              align="center"
                                                              bgcolor="#2200ffbb"
                                                              class="inner-td"
                                                              style="
                                                                border-radius: 6px;
                                                                font-size: 16px;
                                                                text-align: center;
                                                                background-color: inherit;
                                                              "
                                                            >
                                                              <a
                                                                href="/contact"
                                                                style="
                                                                  background-color: #2f00ffbb;
                                                                  border: 1px
                                                                    solid
                                                                    #2200ffbb;
                                                                  border-color: #2200ffbb;
                                                                  border-radius: 0px;
                                                                  border-width: 1px;
                                                                  color: #000000;
                                                                  display: inline-block;
                                                                  font-size: 14px;
                                                                  font-weight: normal;
                                                                  letter-spacing: 0px;
                                                                  line-height: normal;
                                                                  padding: 12px
                                                                    40px 12px
                                                                    40px;
                                                                  text-align: center;
                                                                  text-decoration: none;
                                                                  border-style: solid;
                                                                  font-family: inherit;
                                                                "
                                                                target="_blank"
                                                                >Contact
                                                                Support</a
                                                              >
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table
                                                class="module"
                                                role="module"
                                                data-type="spacer"
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                style="table-layout: fixed"
                                                data-muid="c37cc5b7-79f4-4ac8-b825-9645974c984e"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        padding: 0px 0px 30px
                                                          0px;
                                                      "
                                                      role="module-content"
                                                      bgcolor="6E6E6E"
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                data-role="module-unsubscribe"
                                class="module"
                                role="module"
                                data-type="unsubscribe"
                                style="
                                  color: #444444;
                                  font-size: 12px;
                                  line-height: 20px;
                                  padding: 16px 16px 16px 16px;
                                  text-align: Center;
                                "
                                data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"
                              >
                                <p style="font-size: 12px; line-height: 20px">
                                  <a
                                    class="Unsubscribe--unsubscribeLink"
                                    href="{{{unsubscribe}}}"
                                    target="_blank"
                                    style=""
                                    >Unsubscribe</a
                                  >
                                  -
                                  <a
                                    href="{{{unsubscribe_preferences}}}"
                                    target="_blank"
                                    class="Unsubscribe--unsubscribePreferences"
                                    style=""
                                    >Unsubscribe Preferences</a
                                  >
                                </p>
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="module"
                                data-role="module-button"
                                data-type="button"
                                role="module"
                                style="table-layout: fixed"
                                width="100%"
                                data-muid="550f60a9-c478-496c-b705-077cf7b1ba9a"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      bgcolor=""
                                      class="outer-td"
                                      style="padding: 0px 0px 20px 0px"
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="wrapper-mobile"
                                        style="text-align: center"
                                      >
                                        <tbody>
                                          <tr></tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>`;
};

module.exports = generateVerificationEmail;