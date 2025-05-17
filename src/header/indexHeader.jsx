import styles from "./stylesHeader.module.css";
import image from "../img/medical-dog.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import { FaCat, FaDog } from "react-icons/fa6";
import { MdOutlineOtherHouses } from "react-icons/md";
import { TbHomeDot } from "react-icons/tb";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.caixaImg}>
          <img src={image} alt="img" />
        </div>
        <div className={styles.cart}>
          <p>
            Carrinho{" "}
            <i>
              <AiOutlineShoppingCart />
            </i>
          </p>
        </div>
        <div className={styles.buscar}>
          <input type="text" placeholder="Buscar" />
          <button>
            Buscar <HiMiniMagnifyingGlassCircle />
          </button>
        </div>
        <div className={styles.caixaNav}>
          <nav>
            <p>
              <FaDog /> Cachorro
            </p>
            <button>alimentação </button>
            <button>farmácia </button>
            <button>banho e higiene </button>
            <button>brinquedos </button>

            <p>
              <FaCat /> Gatos
            </p>
            <button>alimentação </button>
            <button>farmácia </button>
            <button>banho e higiene </button>
            <button>brinquedos </button>

            <p>
              <MdOutlineOtherHouses />
              Outro
            </p>
            <button>equipamentos </button>

            <p>
              <TbHomeDot /> Casa
            </p>
            <button> inseticida</button>
            <button>pulverizador </button>
            <button>repelentes </button>
          </nav>
        </div>
      </div>
    </>
  );
}
