export const ping = async (): Promise<void> => {
  try {
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/meta/ping`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          referrer: document.referrer,
          domain: window.location.hostname
        })
      }
    )
  } catch {
    console.log('Error pinging the server with metadata.')
  }
}
