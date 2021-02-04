import { MdRotate90DegreesCcw } from "react-icons/md"

export const WaveDown = ({fill}) => {
  const styles = {
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '0',
    flex: '1'
  }
  return (
  <svg viewBox="0 0 1440 320" style={styles}>
  <path fill={fill} fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
)
  }

export const WaveUp = ({fill}) => {
  const styles = {
    width: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    flex: '1',
  }
  return (
    <svg viewBox="0 0 1440 320" style={styles}>
    <path fill={fill} fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
  </svg>
)
  }

  export const WaveUpRotate = ({fill}) => {
    const styles = {
      width: '100%',
      position: 'absolute',
      left: '0',
      bottom: '0',
      flex: '1',
      transform: 'rotate(180deg)',
    }
    return (
      <svg viewBox="0 0 1440 320" style={styles}>
      <path fill={fill} fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
    </svg>
  )
    }

    export const WaveDownRotate = ({fill}) => {
      const styles = {
        width: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        flex: '1',
        transform: 'rotate(180deg)',
      }
      return (
        <svg viewBox="0 0 1440 320" style={styles}>
        <path fill={fill} fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    )
      }

      export const WaveProduct = ({fill}) => {
        const styles = {
          width: '100%',
          position: 'relative',
          left: '0',
          top: '0',
          flex: '1'
        }
        return (
        <svg viewBox="0 0 1440 320" style={styles}>
        <path fill={fill} fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      )
        }