"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type DatasetType = 'biased' | 'unbiased'

interface DatasetContextType {
  datasetType: DatasetType
  setDatasetType: (type: DatasetType) => void
}

const DatasetContext = createContext<DatasetContextType | undefined>(undefined)

export function DatasetProvider({ children }: { children: ReactNode }) {
  const [datasetType, setDatasetType] = useState<DatasetType>('biased')

  return (
    <DatasetContext.Provider value={{ datasetType, setDatasetType }}>
      {children}
    </DatasetContext.Provider>
  )
}

export function useDataset() {
  const context = useContext(DatasetContext)
  if (context === undefined) {
    throw new Error('useDataset must be used within a DatasetProvider')
  }
  return context
}
