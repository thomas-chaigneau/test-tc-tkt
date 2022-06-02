
import styles from './styles.module.css';

export interface ITableCellTemplate {
  type: 'txt' | 'buttonLike';
  text: string;
}

export interface ITableRowProps {
  rowTemplate: ITableCellTemplate[];
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  ;
}

const TableRow = ({ rowTemplate, onClick }: ITableRowProps) => {
  const createCellFromTemplate = (template: ITableCellTemplate) => {
    if (template.type === 'txt') return (
      <div className={styles.txtCell}>{template.text}</div>
    )
    if (template.type === 'buttonLike') return (
      <button className={styles.buttonLikeCell}>{template.text}</button>
    )
    return null;
  }

  return (
    <button className={styles.root} onClick={onClick}>
      {rowTemplate.map((template) => createCellFromTemplate(template))}
    </button>
  );
};
export default TableRow;