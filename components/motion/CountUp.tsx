/**
 * Sky9's StatsBar count-up, for verified numbers only (never a number invented for the effect).
 * The real value is server-rendered and stays in the DOM for search engines and screen readers;
 * MotionRuntime counts up in the aria-hidden overlay once the number enters the viewport, and the
 * value reserves the width, so nothing shifts.
 */
export function CountUp({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`count ${className}`} data-count={value}>
      <span className="count-value">{value}</span>
      <span className="count-type" aria-hidden="true" />
    </span>
  );
}
