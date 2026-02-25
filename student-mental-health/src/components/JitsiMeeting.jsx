export default function JitsiMeeting({ roomName = "default-room" }) {
  const url = `https://meet.jit.si/${encodeURIComponent(roomName)}`

  return (
    <div style={{ margin: '1rem 0', border: '1px solid #d1d5db', borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        allow="camera; microphone; fullscreen; display-capture"
        src={url}
        style={{ width: '100%', height: '600px', border: 'none' }}
      />
    </div>
  )
}