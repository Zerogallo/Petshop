import styles from "./stylesHeader.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import { FaCat, FaDog } from "react-icons/fa6";
import { MdOutlineOtherHouses } from "react-icons/md";
import { TbHomeDot } from "react-icons/tb";

export default function Header() {
  // Estrutura de dados para os itens de navegação (mais organizado)
  const categorias = [
    {
      icone: <FaDog />,
      titulo: "Cachorro",
      subcategorias: [
        "alimentação",
        "farmácia",
        "banho e higiene",
        "brinquedos",
      ],
    },
    {
      icone: <FaCat />,
      titulo: "Gatos",
      subcategorias: [
        "alimentação",
        "farmácia",
        "banho e higiene",
        "brinquedos",
      ],
    },
    {
      icone: <MdOutlineOtherHouses />,
      titulo: "Outros",
      subcategorias: ["equipamentos"],
    },
    {
      icone: <TbHomeDot />,
      titulo: "Casa",
      subcategorias: ["inseticida", "pulverizador", "repelentes"],
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Substitua por sua logo real */}
        <h1>PetShop</h1>
      </div>

      <div className={styles.buscaECarrinho}>
        <div className={styles.busca}>
          <input
            type="text"
            placeholder="Buscar produtos..."
            aria-label="Campo de busca"
          />
          <button className={styles.botaoBusca}>
            <HiMiniMagnifyingGlassCircle /> Buscar
          </button>
        </div>

        <div className={styles.carrinho}>
          <AiOutlineShoppingCart className={styles.iconeCarrinho} />
          <span>Carrinho</span>
        </div>
      </div>

      <nav className={styles.navegacao}>
        {categorias.map((categoria, index) => (
          <div key={index} className={styles.categoria}>
            <div className={styles.tituloCategoria}>
              {categoria.icone} {categoria.titulo}
            </div>
            <div className={styles.subcategorias}>
              {categoria.subcategorias.map((sub, subIndex) => (
                <button key={subIndex} className={styles.botaoSubcategoria}>
                  {sub}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
