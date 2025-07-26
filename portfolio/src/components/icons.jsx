export const ArrowIcon = ({ deg }) => {
  return (
    <svg width="16" height="8" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${deg}deg)` }}>
      <path d="M5.34546 0.339966L9.84546 4.83997L0.845459 4.83997L5.34546 0.339966Z" fill="#F8FAFC" />
    </svg>
  );
}

export const SnakeFoodIcon = ({ className = "" }) => {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx="10.691" cy="10.6855" r="10.3456" fill="#46ECD5" />
      <circle opacity="0.2" cx="10.691" cy="10.6855" r="7.34558" fill="#46ECD5" />
      <circle cx="10.691" cy="10.6855" r="4" fill="#46ECD5" />
    </svg>
  );
}