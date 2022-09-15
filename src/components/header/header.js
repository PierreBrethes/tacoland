import taco from '../../resources/taco.png';
import { Wrapper, TacoLink } from './header.style';

const Header = () => {
  return (
    <Wrapper>
      <img src={taco} className="logo" alt="taco" />
      <div>
        <TacoLink to="/"><code>Home</code></TacoLink>
        <TacoLink to="/nfts"><code>NFT gallery</code></TacoLink>
        <TacoLink to="/travels"><code>Travels</code></TacoLink>
      </div>
    </Wrapper>
  );
};

export default Header;