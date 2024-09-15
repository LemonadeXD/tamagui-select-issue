import { Button, H1, Text, Paragraph, Separator, YStack } from '@my/ui'
import React, { memo } from 'react'
import { SelectParentContainer } from '../authForm'

export type authActionType = 'login' | 'signup'

export type Props = {
  authType: authActionType
}

export const HomeScreen: React.FC<Props> = memo(({ authType }) => {
  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <YStack gap="$4">
        <H1 ta="center" col="$color12">
          Tamagui Select Component Issue
        </H1>
        <Paragraph col="$color11" ta="center">
          The default Value in the Select component flickers when rerendered.
        </Paragraph>
        <Paragraph col="$color11" ta="center">
          Notice how the value INSIDE the Select dropdown (+60) "flickers" but not the dropdown box
          itself.
        </Paragraph>
        <Separator />
      </YStack>
      <SelectParentContainer authType={authType} />
    </YStack>
  )
})
