import "./feitiço.scss";

const Feitiço = ({ nomeFeitiço, especialidade, select }: any) => {
  return (
    <tbody className="feitiço">
      <tr>
        <td className="selecionar">
          <div>
            <img
              src="d10.png"
              onClick={(a) => {
                const alvo = a.target;
                (alvo as any).style.cssText = `
            transform: rotate(1turn);
            transition: transform 1s
          `;
                select(nomeFeitiço);
                setTimeout(() => {
                  const alvo = a.target;
                  (alvo as any).style.cssText = `
            transform: none;
            transition: none
          `;
                }, 0);
              }}
            />
          </div>
        </td>
        <td className="item">{nomeFeitiço}</td>
        <td className="tipo">
          {especialidade.replace("P", "Praxis").replace("C", "Clássico")}
        </td>
      </tr>
    </tbody>
  );
};

export default Feitiço;
