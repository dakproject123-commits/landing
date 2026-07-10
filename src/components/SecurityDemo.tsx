import { useState, useEffect } from "react"
import { Shield, Server, Lock, Unlock, Play } from "lucide-react"

const SIMULATED_MESSAGES = [
  "Let's launch the app tonight! 🚀",
  "Meet me at the park at 5 PM. 🕊️",
  "The secret passcode is 9842! 🤫",
]

export function SecurityDemo() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [msgIndex, setMsgIndex] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const plainText = SIMULATED_MESSAGES[msgIndex]
  // Strip non-ASCII characters (like emojis) before calling btoa to prevent Latin1 encoding crashes
  const asciiOnlyText = plainText.replace(/[^\x00-\x7F]/g, "")
  const cipherText = "E2EE:v1:nonce_29d8:mac_f801:cipher_" + btoa(asciiOnlyText).substring(0, 16) + "..."

  const startSimulation = () => {
    if (isRunning) return
    setIsRunning(true)
    setActiveStep(1)
  }

  useEffect(() => {
    if (!isRunning) return

    let timer: any
    if (activeStep === 1) {
      // Step 1: Encrypting on Sender's Device
      timer = setTimeout(() => {
        setActiveStep(2)
      }, 2000)
    } else if (activeStep === 2) {
      // Step 2: Transmitting Encrypted data to Server
      timer = setTimeout(() => {
        setActiveStep(3)
      }, 2500)
    } else if (activeStep === 3) {
      // Step 3: Decrypting on Receiver's Device
      timer = setTimeout(() => {
        setIsRunning(false)
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [activeStep, isRunning])

  const selectMessage = (index: number) => {
    if (isRunning) return
    setMsgIndex(index)
    setActiveStep(0)
  }

  return (
    <section id="security" className="section bg-dark-accent/30 border-y border-glass-border">
      <div className="container text-center mb-16">
        <BadgeCheck text="E2EE Security" />
        <h2 className="text-3xl md:text-4xl mt-4">How End-to-End Encryption Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-3">
          Your messages are locked before they leave your device and unlocked only on the receiver's screen.
        </p>
      </div>

      <div className="container">
        <div className="glass-card security-demo-card">
          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-3 w-full border-b border-glass-border pb-6">
            <span className="text-sm font-semibold text-muted-foreground self-center mr-2">Choose Message:</span>
            {SIMULATED_MESSAGES.map((msg, idx) => (
              <button
                key={idx}
                disabled={isRunning}
                onClick={() => selectMessage(idx)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  msgIndex === idx
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-glass-border bg-glass-bg hover:bg-glass-bg-hover text-secondary"
                }`}
              >
                "{msg.substring(0, 20)}..."
              </button>
            ))}

            <button
              onClick={startSimulation}
              disabled={isRunning}
              className="btn btn-primary text-xs py-2 px-4 gap-2 ml-auto"
            >
              <Play className="size-3" />
              Simulate Transmission
            </button>
          </div>

          {/* Encryption Nodes Visual */}
          <div className="encryption-flow w-full">
            {/* 1. Sender Node */}
            <div className={`flow-node ${activeStep === 1 || activeStep === 0 ? "active" : ""}`}>
              <div className="flex justify-center mb-3">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Unlock className="size-5" />
                </div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Sender's Device</h4>
              <p className="text-[11px] text-muted">Encrypts payload locally</p>
              
              <div className="message-box">
                {activeStep > 1 ? (
                  <span className="text-primary font-bold text-[11px]">🔐 Message Encrypted</span>
                ) : (
                  <span className="text-slate-300 font-semibold">{plainText}</span>
                )}
              </div>
            </div>

            {/* Line connector */}
            <div className="flow-line"></div>

            {/* 2. Server Node */}
            <div className={`flow-node ${activeStep === 2 ? "encrypted" : ""}`}>
              <div className="flex justify-center mb-3">
                <div className="size-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Server className="size-5" />
                </div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Database Server</h4>
              <p className="text-[11px] text-muted">Zero-knowledge storage</p>

              <div className="message-box font-mono text-[9px] text-accent-hover">
                {activeStep === 2 ? (
                  <span className="animate-[encrypt_1s_infinite]">{cipherText}</span>
                ) : activeStep > 2 ? (
                  <span>{cipherText}</span>
                ) : (
                  <span className="text-muted italic">Awaiting message...</span>
                )}
              </div>
            </div>

            {/* 3. Receiver Node */}
            <div className={`flow-node ${activeStep === 3 ? "active" : ""}`}>
              <div className="flex justify-center mb-3">
                <div className="size-10 rounded-full bg-cyan/10 text-cyan flex items-center justify-center">
                  {activeStep === 3 ? <Unlock className="size-5" /> : <Lock className="size-5" />}
                </div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Receiver's Device</h4>
              <p className="text-[11px] text-muted">Decrypts with private key</p>

              <div className="message-box">
                {activeStep === 3 ? (
                  <span className="text-green-400 font-semibold">{plainText}</span>
                ) : (
                  <span className="text-muted italic">🔐 Encrypted Payload</span>
                )}
              </div>
            </div>
          </div>

          {/* Explanation Text */}
          <div className="text-xs text-muted-foreground bg-black/40 border border-glass-border rounded-lg p-4 w-full flex items-start gap-3 text-left">
            <InfoIcon />
            <div>
              {activeStep === 0 && (
                <p>Click "Simulate Transmission" to see how messages traverse safely across the server.</p>
              )}
              {activeStep === 1 && (
                <p><strong>Step 1: Encryption.</strong> The messaging service takes the plaintext message and generates a cryptographically secure ciphertext locally using the sender's private key and recipient's public key before saving or pushing.</p>
              )}
              {activeStep === 2 && (
                <p><strong>Step 2: Transmission.</strong> The server only stores the ciphertext. Even if the database is exposed, the message is unreadable. A hacker, admin, or moderator sees nothing but randomized hexadecimal characters.</p>
              )}
              {activeStep === 3 && (
                <p><strong>Step 3: Decryption.</strong> Once retrieved by the recipient's phone, the app uses their private key to decrypt and restore the original text locally in the sandbox. Total privacy achieved.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeCheck({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border border-primary/20 bg-primary/10 text-primary">
      <Shield className="size-3" />
      {text}
    </span>
  )
}

function InfoIcon() {
  return (
    <svg className="size-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
