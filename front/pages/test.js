function test() 

{
    return (
        <div>
            <div >
            <div >
                <form name="optionsForm" id="options-form">
                    <div >
                        <label for="disabledTextInput">Domain or IP</label>
                        <input name="address" c type="text" placeholder="Address to be scanned"/>
                    </div>
                    <div >
                        <label for="disabledTextInput">Min Port Range</label>
                        <input name="min"  type="text" placeholder="0"/>
                    </div>
                    <div c>
                        <label for="disabledTextInput">Max Port Range</label>
                        <input name="max" type="text" placeholder="65535"/>
                    </div>
                    <div >
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div id="alert-form"  >
                <div id="alert"  role="alert"></div>
            </div>
        </div>
        </div>
    )

}
export default test 