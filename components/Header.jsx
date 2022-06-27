import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div>
      Chainlink Lottos
      <ConnectButton moralisAuth={false} />
    </div>
  )
}