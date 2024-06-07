import styles from "./ingreso-cancion.module.css"

export default function IngresoCancion () {
    return(
        <form>
            <div className={styles.boxInput}>
                <div className={styles.border}>
                    <input type="text" name="text" className={styles.input} placeholder="Name"></input>
                </div>
            </div>

        </form>
    )
}