import React from 'react';
import { ScrollView } from 'react-native';

import { BlueCard, BlueSpacing20, BlueText } from '../../BlueComponents';

const Licensing = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" automaticallyAdjustContentInsets>
      <BlueCard>
        <BlueText>MIT License</BlueText>
        <BlueSpacing20 />
        <BlueText>Copyright (c) 2018-2024 1zWallet developers</BlueText>
        <BlueSpacing20 />

        <BlueText>
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </BlueText>
        <BlueSpacing20 />

        <BlueText>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
          CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </BlueText>
      </BlueCard>
    </ScrollView>
  );
};

export default Licensing;
