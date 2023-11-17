export default function CodyMattoxPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Cody. </h1>
          </div>
          <img
            className='pic'
            src='https://attachments.office.net/owa/Cody.Mattox%40colorado.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADRmMGExMGUxLTczN2UtNDEyMC05NmExLTI1ODQ5NWNkNGRmNABGAAAAAADq%2BgWUWpXiTKN0uu3S6ki7BwDTYarWjyp5TYkfsigRC8vWAAAAAAEMAADTYarWjyp5TYkfsigRC8vWAACWsfAsAAABEgAQACDQCuPLZ1NPrvZsERgJ7c0%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiZDkxZjA0MWEzZGQ1NDE4ZjllYzcwMjA4MmY1ZjZmZGQiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjQ4OTkyMjczODFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1ZjU2MjA1ZC03NDZkLTQyZjgtODlkNS1mNTA1NGQ5MzM5OGZcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTI0MTIxMTk1MDUtMzU2MDg5MjA1Ny0xNTAwNDI2Mjk0LTY5MzU3NTMzXCJ9IiwibmJmIjoxNzAwMTkyMjM0LCJleHAiOjE3MDAxOTI4MzQsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEAzZGVkOGIxYi0wNzBkLTQ2MjktODJlNC1jMGIwMTlmNDYwNTciLCJoYXBwIjoib3dhIn0.G2ufcEhDP4eUghtITM8BpnXwc6wpUy9KYh_3qXn5KM6Ly6BTWPBqp7Lg3gtlS4b79jN7sHgRwfkQkK5R8BnsFVuWvcTRavewmf7CqaPnxbVghk39qc-N3EBiXSvA6C9MTMOfVaTPpmv3Nr9Aywq8hGKOOFQ6l0oGw3krbXL4LVXLEfWIYJtbbQGpFKg39VK-5DrFFoiwu9eL0JHtKohv3IzvVspJ0WJv8BgFyBj2DoZsHGf1wCG0xhujK8Es3N-uf5ZYw_FfLjeHvlRgfZoFg4PtwhasIyhNyqqMNy9H52rfPbAR_XCb-yj2hYzSWNnvsQP79zTQV-PwaSnRA1eoBA&X-OWA-CANARY=1CfaBbaR_02BjcR3AllrrnDPJoUe59sYDJhfPrtEhy3EW5ZGmGTr1mj5PGvcVHGYtFhAeXRXV1Q.&owa=outlook.office.com&scriptVer=20231103003.19&animation=true'
            alt='Cody Mattox'
          />

          <p className='description'>
        
        Hey there! I'm Cody, currently navigating the exciting journey of university life at the University of Colorado Boulder after graduating from C. Milton Wright High School.
        When I'm not immersed in the world of computer science, you can find me on the lacrosse field strategizing plays, spiking volleyballs with precision, carving through snow on skis, or scaling rock faces for that adrenaline rush.
        Balancing the challenges of coding and the thrill of sports, I'm on a mission to conquer both the academic and athletic landscapes with enthusiasm and determination.

            

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