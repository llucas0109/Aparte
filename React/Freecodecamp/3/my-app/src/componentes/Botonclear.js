import '../styleshyts/botonclear.css'
const Botonclear = (props) =>(
  <div className="Boton-clear" onClick={props.manejarclear}>
    {props.children} {/*children signuifica que ficara dentro da div*/}
  </div>
); /*returno direto.*/
export default Botonclear;