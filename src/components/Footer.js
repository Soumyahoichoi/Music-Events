import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>CopyRight &copy; 2023 Music Events</p>
      <Link href="/about">About this project</Link>
    </footer>
  )
}
