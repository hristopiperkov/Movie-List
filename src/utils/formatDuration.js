export function formatDuration(durationMinutes) {
  const totalMinutes = Number(durationMinutes);

  if (!Number.isFinite(totalMinutes) || totalMinutes <= 0) {
    return '';
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}
