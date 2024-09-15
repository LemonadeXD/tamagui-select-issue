import {
  YStack,
  XStack,
  SelectProps,
  Select,
  Adapt,
  Sheet,
  getFontSize,
  FontSizeTokens,
  Button,
  Text,
  H3,
} from '@my/ui'
import { ChevronDown, Check } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'
import React, { memo, useEffect } from 'react'
import { Props } from '../home/screen'

export const SelectParentContainer: React.FC<Props> = memo(({ authType }) => {
  const [val, setVal] = React.useState('+60')
  const header = authType === 'login' ? 'Login Page' : 'Sign Up Page'
  const buttonText = authType === 'login' ? 'Login' : 'Sign Up'
  const bottomText = authType === 'login' ? 'Dont have an account? ' : 'Already have an account? '
  const linkText = authType === 'login' ? 'Sign up now!' : 'Login here'
  const linkHref = authType === 'login' ? '/signUp' : '/login'
  return (
    <YStack gap="$5" ai="center" w="100%" maxWidth={350}>
      <H3 w="100%" textAlign="left">
        {header}
      </H3>
      <Select value={val} onValueChange={setVal} disablePreventBodyScroll>
        <Select.Trigger width="100%" iconAfter={ChevronDown}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: 'spring',
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.Viewport minWidth={200}>
            <Select.Group>
              <Select.Label>Phone Code</Select.Label>
              {React.useMemo(
                () =>
                  items.map((item, i) => {
                    return (
                      <Select.Item index={i} key={item.countryCode} value={item.phoneCode}>
                        <XStack>
                          <Select.ItemText w="$4">{item.countryCode}</Select.ItemText>
                          <Select.ItemText>{item.phoneCode}</Select.ItemText>
                        </XStack>
                        <Select.ItemIndicator marginLeft="auto">
                          <Check size={16} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    )
                  }),
                [items]
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select>
      <Button w="100%">{buttonText}</Button>
      <YStack>
        <XStack>
          <Text fontSize={12}>{bottomText}</Text>
          <Link href={linkHref}>
            <Text fontSize={12} textDecorationLine="underline" fontWeight="bold">
              {linkText}
            </Text>
          </Link>
        </XStack>
        <Text position="absolute" w="100%" flexWrap="nowrap" top={30} fontSize={12} col="limegreen">
          Click on this link to make it flicker ^
        </Text>
      </YStack>
    </YStack>
  )
})

const items = [
  { countryCode: 'US', phoneCode: '+1' },
  { countryCode: 'TH', phoneCode: '+66' },
  { countryCode: 'SG', phoneCode: '+65' },
  { countryCode: 'BR', phoneCode: '+55' },
  { countryCode: 'CN', phoneCode: '+86' },
  { countryCode: 'JP', phoneCode: '+81' },
  { countryCode: 'IN', phoneCode: '+91' },
  { countryCode: 'AU', phoneCode: '+61' },
  { countryCode: 'GB', phoneCode: '+44' },
  { countryCode: 'FR', phoneCode: '+33' },
  { countryCode: 'DE', phoneCode: '+49' },
  { countryCode: 'IT', phoneCode: '+39' },
  { countryCode: 'ES', phoneCode: '+34' },
  { countryCode: 'RU', phoneCode: '+7' },
  { countryCode: 'CA', phoneCode: '+1' },
  { countryCode: 'ZA', phoneCode: '+27' },
  { countryCode: 'NG', phoneCode: '+234' },
  { countryCode: 'AR', phoneCode: '+54' },
  { countryCode: 'MX', phoneCode: '+52' },
  { countryCode: 'KR', phoneCode: '+82' },
  { countryCode: 'PH', phoneCode: '+63' },
  { countryCode: 'VN', phoneCode: '+84' },
  { countryCode: 'ID', phoneCode: '+62' },
  { countryCode: 'PK', phoneCode: '+92' },
  { countryCode: 'EG', phoneCode: '+20' },
  { countryCode: 'TR', phoneCode: '+90' },
  { countryCode: 'MY', phoneCode: '+60' },
  { countryCode: 'AE', phoneCode: '+971' },
  { countryCode: 'SA', phoneCode: '+966' },
  { countryCode: 'KE', phoneCode: '+254' },
]
