// rest operator
export default function Section({ title, children, ...props }) {
  return (
    // forward props
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
