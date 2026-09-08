import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
