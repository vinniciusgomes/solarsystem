import React, { useEffect, useState, useRef } from 'react';

import images from './planets';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  type: 'full' | 'half';
  dimension?: number;
}

const Planet: React.FC<IconProps> = ({
  name,
  type,
  dimension,
  ...rest
}): JSX.Element | null => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const { default: namedImport } = await images[type][name];
        ImportedIconRef.current = namedImport;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    const dimensions = { width: dimension, height: dimension };
    return <ImportedIcon {...rest} {...dimensions} />;
  }

  return null;
};

export default Planet;
