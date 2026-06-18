import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const categories = [
    '🍕 Pizza',
    '🍔 Burger',
    '🥗 Healthy',
    '🥤 Drinks',
    '🍜 Noodles',
  ];

  const restaurants = [
    {
      emoji: '🍕',
      name: 'Pizza House',
      rating: '4.8',
      time: '25 min',
    },
    {
      emoji: '🍔',
      name: 'Burger Point',
      rating: '4.6',
      time: '18 min',
    },
    {
      emoji: '🥗',
      name: 'Healthy Bowl',
      rating: '4.9',
      time: '20 min',
    },
    {
      emoji: '🍜',
      name: 'Noodle Street',
      rating: '4.7',
      time: '22 min',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F7F8FA',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}>

        {/* Header */}

        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>

            <Image
              source={require('./assets/images/logo.png')}
              style={{
                width: 50,
                height: 50,
                marginRight: 12,
              }}
            />

            <View>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#111',
                }}>
                ServeX
              </Text>

              <Text
                style={{
                  color: '#777',
                  marginTop: 2,
                }}>
                Fast food delivery
              </Text>
            </View>

          </View>

          <Text
            style={{
              fontSize: 32,
              fontWeight: '800',
              color: '#111',
              marginTop: 25,
              lineHeight: 42,
            }}>
            Discover your{'\n'}favorite food
          </Text>

          {/* Search */}

          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 18,
              marginTop: 20,
              paddingHorizontal: 18,
              elevation: 3,
            }}>
            <TextInput
              placeholder="Search food or restaurants..."
              style={{
                height: 55,
                fontSize: 16,
              }}
            />
          </View>

          {/* Offer Banner */}

          <TouchableOpacity
            onPress={() => Alert.alert('Offer Activated')}
            style={{
              backgroundColor: '#FF6B00',
              borderRadius: 24,
              padding: 24,
              marginTop: 22,
            }}>

            <Text
              style={{
                color: '#fff',
                fontSize: 28,
                fontWeight: '800',
              }}>
              50% OFF
            </Text>

            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                fontSize: 15,
              }}>
              First order special offer
            </Text>

          </TouchableOpacity>

        </View>

        {/* Categories */}

        <View
          style={{
            marginTop: 28,
            paddingHorizontal: 20,
          }}>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#111',
              marginBottom: 15,
            }}>
            Categories
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>

            {categories.map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => Alert.alert(item)}
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 18,
                  paddingVertical: 12,
                  borderRadius: 20,
                  marginRight: 10,
                  elevation: 2,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

          </ScrollView>

        </View>

        {/* Popular */}

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 30,
          }}>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 15,
            }}>
            Popular Near You
          </Text>

          {restaurants.map(item => (
            <TouchableOpacity
              key={item.name}
              onPress={() => Alert.alert(item.name)}
              style={{
                backgroundColor: '#fff',
                borderRadius: 24,
                padding: 18,
                marginBottom: 15,
                elevation: 3,
              }}>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>

                <Text
                  style={{
                    fontSize: 48,
                    marginRight: 15,
                  }}>
                  {item.emoji}
                </Text>

                <View style={{flex: 1}}>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: '#111',
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      color: '#666',
                      marginTop: 5,
                    }}>
                    ⭐ {item.rating} • {item.time}
                  </Text>

                </View>

              </View>

            </TouchableOpacity>
          ))}

        </View>

        {/* Bottom Navigation */}

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: '#fff',
            borderRadius: 24,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 18,
            elevation: 3,
          }}>

          <TouchableOpacity>
            <Text>🏠 Home</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>🔍 Search</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>🛒 Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>👤 Profile</Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}

        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 20,
          }}>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#555',
            }}>
            Built with ❤️ by Rahul Verma
          </Text>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}