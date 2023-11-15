export default function GavinPetruzziPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Gavin. </h1>
          </div>
          <img
            className='pic'
            src='https://attachments.office.net/owa/Gavin.Petruzzi%40colorado.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADQ3YWI4OTVkLWNhOGUtNDAwNi04ZTQ0LWMxZjJkNGVkMzg1MABGAAAAAAD7OJF22dK%2FSYyIzuEAaEHfBwCnik9GZerRS7cPKK7545CLAAAAAAEMAACnik9GZerRS7cPKK7545CLAACIvwYGAAABEgAQAGGwCPdKIWhOgtwm1LOCxyM%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiMGUyOGNmMGVmODUwNDdkMDk0MGZiMWYzYjQzMjA3YTUiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjUwNjE3MTc0MjhcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1ZWI5MTdkNi0xNjQ5LTRlNGEtOGM2Ni1jNWQxMjEzODEzN2RcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTI0MTIxMTk1MDUtMzU2MDg5MjA1Ny0xNTAwNDI2Mjk0LTcwNzUzOTgxXCJ9IiwibmJmIjoxNzAwMDI2NTk1LCJleHAiOjE3MDAwMjcxOTUsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJoYXBwIjoib3dhIn0.IUM6tmtTrj-R-fvH26YT04nLRVjvxS-mpwH8bfk4QQfMbGiI025bd5EfFTquta0khk6m9S23-lEKUj-t29LfWgSvjHFO1kqZyZj_LIzwXdiWJbZtVQ-Pt_u2OM_wbqwtVMYuH1UqxubBi0CnArMoL6KE7eWgByEBg2GCCFsgo6Udm2pCO-pyRCfOFBiBr_3QIU3GWSpXR7gLnsIu8zlotqd3JIXG-uzmvuM0A8rtz6Gwecm_HTDiM2xG_e3w5vGEZgkB8BDeQ2fMO3A7G68tUZcE0iWr9UE8EjJjtVTvNr4PwFdDqMVoc57jwZQUH4QhWC56TYd13npTKf9ScYppjQ&X-OWA-CANARY=6Hiq5cTra0SpiQva9At64UD8hNac5dsYWARvA60UmKd6f9AM82McDQp5T_zIZWkDjc1SPNL9uOU.&owa=outlook.office.com&scriptVer=20231103003.19&animation=true'
            alt='tom holland'
          />

          <p className='description'>
            Hey I am Gavin Petruzzi. I am a computer science major (likely with a business minor) at University of Colorado Boulder. I am from Littleton, Colorado and have lived here my entire life. 
            I graduated from Chatfield Senior High School and am really looking forward to continuing my education here. I love to ski, play soccer, and spend time with family and friends. 
            I have an older brother named Owen who is currently a Senior also at CU Boulder. As I said before, I love to play soccer and have played it since I was 3 years old. 
            I've made so many lifelong friends from the sport, a lot of which also go to school here. 

          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}