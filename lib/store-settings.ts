import { prisma } from './prisma'

export async function getStoreSettings() {
  const settings = await prisma.storeSettings.findUnique({
    where: { id: 'singleton' },
  })

  // If settings don't exist, create default settings
  if (!settings) {
    return await prisma.storeSettings.create({
      data: {
        id: 'singleton',
        phoneNumber: '(602)829-0009',
        metroArea: 'Phoenix Metropolitan Area',
        isClosed: false,
      },
    })
  }

  return settings
}

export async function isStoreClosed() {
  const settings = await getStoreSettings()
  return settings.isClosed
}
