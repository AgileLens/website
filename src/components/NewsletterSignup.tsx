'use client';

import { useEffect } from 'react';
import Script from 'next/script';

function showSuccess() {
  const form = document.querySelector('.ml-subscribe-form-39575133 .row-form') as HTMLElement;
  const success = document.querySelector('.ml-subscribe-form-39575133 .row-success') as HTMLElement;
  if (form) form.style.display = 'none';
  if (success) success.style.display = '';
}

export default function NewsletterSignup() {
  useEffect(() => {
    (window as any).ml_webform_success_39575133 = showSuccess;
    fetch('https://assets.mailerlite.com/jsonp/2179151/forms/184118159004927824/takel');
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('ml-submit', '1');
    try {
      await fetch(form.action, { method: 'POST', body: data, mode: 'no-cors' });
    } catch {
      // no-cors fetch always throws on response read — that's fine
    }
    showSuccess();
  }

  return (
    <>
      <style>{`
        @import url("https://assets.mlcdn.com/fonts.css?version=1775464");
        .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }
        .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }
        @keyframes ml-form-embedSubmitLoad {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .ml-mobileButton-horizontal { display: none; }
        #mlb2-39575133 .ml-mobileButton-horizontal button {
          background-color: #000000 !important;
          border-color: #000000 !important;
          border-style: solid !important;
          border-width: 1px !important;
          border-radius: 4px !important;
          box-shadow: none !important;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          line-height: 20px !important;
          padding: 10px !important;
          width: 100% !important;
        }
        #mlb2-39575133.ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper {
          background-color: #d7bbbb;
          background-image: url(https://storage.mlcdn.com/account_image/2179151/zYYANSJ3bI6MMUlD2BbqcYecoDxNOUPbn4fW71jc.png);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          border-width: 0px;
          border-color: transparent;
          border-radius: 4px;
          border-style: solid;
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0;
          padding: 0;
          position: relative;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-align-center { text-align: center; }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 100%; width: 100%; }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
          padding: 40px 48px 0 48px;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
          padding-bottom: 0;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
          text-align: left;
          margin: 0 0 20px 0;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
          color: #f0dfdf;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 30px;
          font-weight: 400;
          margin: 0 0 10px 0;
          text-align: left;
          word-break: break-word;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
          color: #faebeb;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0 0 10px 0;
          text-align: left;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
          text-align: left !important;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
          margin-bottom: 5px;
          color: #333333;
          font-size: 14px;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-weight: bold;
          display: inline-block;
          line-height: 20px;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
          margin: 0;
          width: 100%;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
          margin: 0 0 20px 0;
          width: 100%;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
          margin: 0;
          padding: 0 0 20px 0;
          width: 100%;
          float: left;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
          height: auto;
          width: 100%;
          float: left;
        }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 70%; float: left; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal { width: 30%; float: left; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields { box-sizing: border-box; float: left; padding-right: 10px; }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
          background-color: #ffffff;
          color: #333333;
          border-color: #cccccc;
          border-radius: 4px;
          border-style: solid;
          border-width: 1px;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 0;
          margin-top: 0;
          padding: 10px 10px;
          width: 100%;
          box-sizing: border-box;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
          background-color: #000000 !important;
          border-color: #000000;
          border-style: solid;
          border-width: 1px;
          border-radius: 4px;
          box-shadow: none;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px !important;
          font-weight: 700;
          line-height: 20px;
          margin: 0 !important;
          padding: 10px !important;
          width: 100%;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
          background-color: #333333 !important;
          border-color: #333333 !important;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
          margin: 0 0 20px 0;
          float: left;
          width: 100%;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
          background-color: #000000 !important;
          border: none !important;
          border-radius: 4px !important;
          box-shadow: none !important;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          line-height: 21px !important;
          padding: 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
          background-color: #333333 !important;
        }
        .ml-error input, .ml-error textarea, .ml-error select { border-color: red !important; }
        .ml-error .label-description,
        .ml-error .label-description p,
        .ml-error label:first-child { color: #ff0000 !important; }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        @media only screen and (max-width: 400px) {
          .ml-form-embedWrapper.embedForm { width: 100% !important; }
          .ml-form-formContent.horozintalForm { float: left !important; }
          .ml-form-formContent.horozintalForm .ml-form-horizontalRow { height: auto !important; width: 100% !important; float: left !important; }
          .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 100% !important; }
          .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-right: 0px !important; padding-bottom: 10px; }
          .ml-form-formContent.horozintalForm .ml-button-horizontal { width: 100% !important; display: none !important; }
          .ml-mobileButton-horizontal { display: inline-block !important; margin-bottom: 20px; width: 100%; }
          #mlb2-39575133.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
            padding: 0 0 10px 0 !important;
          }
          .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
            margin-bottom: 10px !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div id="mlb2-39575133" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-39575133">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">

            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <div className="ml-form-embedContent">
                <h4>Be the first to hear about our events!</h4>
                <p>Whether it&apos;s a meetup, show, demo, or beta test, our newsletter subscribers are the first to know. Sign up here for our monthly announcements.</p>
              </div>

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/2179151/forms/184118159004927824/subscribe"
                data-code=""
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div style={{ width: '100%' }} className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            name="fields[email]"
                            placeholder="Email"
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-button-horizontal primary">
                      <button type="submit" className="primary">Subscribe</button>
                      <button disabled style={{ display: 'none' }} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div className="ml-mobileButton-horizontal">
                  <button type="submit" className="primary">Subscribe</button>
                  <button disabled style={{ display: 'none' }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad"></div>
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b"
        strategy="afterInteractive"
      />
    </>
  );
}
