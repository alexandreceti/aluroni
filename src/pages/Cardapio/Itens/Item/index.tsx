import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'Components/TagsPrato';
import { useNavigate } from 'react-router-dom';

function Item(props: Prato) {
  const navegate = useNavigate();
  const { id, photo, title, description } = props;
  return (
    <div className={styles.item} onClick={() => { navegate(`/prato/${id}`); }}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}

export default Item;