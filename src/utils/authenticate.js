import fetch from 'node-fetch'

const authenticate = async (url, body, onSuccess, onFailure) => {
  try {

    console.log(body)


    ///////////////
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    /////////////////
    console.log(',.,.,')







      const authToken = promise.headers.get('Authorization')
      document.cookie = `x-auth-token=${authToken}`

      const response = await promise.json()


      if (response.email && authToken) {
        onSuccess({
          email: response.email,
          id: response._id
        })
      } else {
        onFailure()
      }
  } catch (e) {
    onFailure(e)
  }
}


export default authenticate